import { UIState } from './';

type UIActionType =
  | {type: '[UI] - Toggle Menu'}
  | {type: 'action name 2'}
;

export const UIReducer = ( state: UIState, action:UIActionType): UIState => {
  switch (action.type) {
    case '[UI] - Toggle Menu':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    case 'action name 2':
      return {
        ...state,
      };
      default:
        return state;
  }

}