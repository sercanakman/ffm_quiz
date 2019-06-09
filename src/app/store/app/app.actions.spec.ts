import {AppActionTypes, AppLoad} from './app.actions';

describe('app.actions', () => {
  describe('AppLoad', () => {
    it('should create an action', () => {
      const action = new AppLoad();
      expect({...action}).toEqual({type: AppActionTypes.APP_LOAD});
    });
  });
});
