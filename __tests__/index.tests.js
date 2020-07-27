const add =require("../index");

test("addes 1+2 to equle 3" , () => {
    expect(add(1,2)).toBe(3);
});
test("addes 1+2 to equle 3", () =>
{
    expect(add(1.0, 2.0)).toBe(3);
});