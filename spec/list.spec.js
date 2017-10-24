import list from 'list';
import { expect } from 'chai';

describe("list", () => {
    context("when list gets a message to add an item", () => {
        it("adds the new item to the list", () => {
            let stateBefore = [];
            let action = {
              type: 'ADD',
              id: 0,
              text: 'Donkey'
            }
            let stateAfter = [
              {
                id: 0,
                text: 'Donkey',
                completed: false
              }
            ]
            expect(list(stateBefore, action)).to.deep.equal(stateAfter);
        });
    });
    context("when list gets a message to remove an item", () => {
        it("removes the new item from the list", () => {
            let stateBefore = [
              {
                id: 0,
                text: 'Donkey',
                completed: false
              },
              {
                id: 1,
                text: 'Cow',
                completed: false
              },
              {
                id: 2,
                text: 'Sheep',
                completed: false
              }
            ];
            let action = {
              type: 'REMOVE',
              id: 0
            }
            let stateAfter = [
              {
                id: 1,
                text: 'Cow',
                completed: false
              },
              {
                id: 2,
                text: 'Sheep',
                completed: false
              }
            ]
            expect(list(stateBefore, action)).to.deep.equal(stateAfter);
        });
    });
});
