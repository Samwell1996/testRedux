import * as actions from './viewerActions';
import Api from '../../Api';

export function fetchViewer() {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.fetchViewer.start());

      const res = await Api.Account.getUser();

      dispatch(actions.fetchViewer.success(res.data));
    } catch (err) {
      dispatch(actions.fetchViewer.error({ message: err.message }));
    }
  };
}
