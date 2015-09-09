describe("palindrome", function() {
  it("returns whether or not a word is a palindrome", function() {
    expect(palindrome("tacocat")).to.eq(true);
  });

  it("returns whether or not a number is a palindrome", function() {
    expect(palindrome("12321")).to.eq(true);
  });
});
