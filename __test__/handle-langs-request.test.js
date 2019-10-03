const sut = require("../app/handle-langs-request");

test("shourd return supported languages in specific format", async () => {
  const ctx = {
    request: {}
  };

  const fetchAllLangs = jest.fn();
  fetchAllLangs.mockReturnValue(
    Promise.resolve({
      query: {
        languages: [
          {
            code: "ase",
            "*": "American sign language"
          },
          {
            code: "de",
            "*": "Deutsch"
          },
          {
            code: "en",
            "*": "English"
          },
          {
            code: "uk",
            "*": "українська"
          }
        ]
      }
    })
  );

  await sut(ctx, fetchAllLangs);

  expect(ctx.status).toBe(200);

  expect(ctx.body).toEqual([
    {
      lang: "de",
      autonym: "Deutsch"
    },
    {
      lang: "en",
      autonym: "English"
    },
    {
      lang: "uk",
      autonym: "українська"
    }
  ]);
});
