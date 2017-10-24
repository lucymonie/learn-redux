// import counter from 'counter';
// import { expect } from 'chai';
//
// describe("counter", () => {
//     context("when counter gets message to increment", () => {
//         it("increases the number by 1", () => {
//             expect(counter(0, { type:'INCREMENT' })).to.equal(1);
//             expect(counter(1, { type:'INCREMENT' })).to.equal(2);
//         });
//     });
//     context("when counter gets message to decrement", () => {
//         it("decreases the number by 1", () => {
//             expect(counter(2, { type:'DECREMENT' })).to.equal(1);
//             expect(counter(1, { type:'DECREMENT' })).to.equal(0);
//         });
//     });
//     context("when counter gets a message it doesn't recognise", () => {
//         it("returns the current state", () => {
//             expect(counter(0, { type:'SOMETHING ELSE' })).to.equal(0);
//             expect(counter(1, { type:'ANOTHER MESSAGE' })).to.equal(1);
//         });
//     });
//     context("when counter gets a state that is undefined", () => {
//         it("resets state to zero", () => {
//             expect(counter(undefined, { type:'INCREMENT' })).to.equal(0);
//         });
//     });
// });
