import * as actions from './viewerActions';
import Api from '../../Api';

export function fetchViewer() {
  console.log('viewer0');
  return async function initThunk(dispatch) {
    try {
      console.log('viewer1');
      dispatch(actions.fetchViewer.start());
      console.log('viewer2');
      const res = await Api.Account.getUser();
      console.log('viewer3');
      dispatch(actions.fetchViewer.success(res.data));
      console.log('viewer4');
    } catch (err) {
      dispatch(actions.fetchViewer.error({ message: err.message }));
    }
  };
}
