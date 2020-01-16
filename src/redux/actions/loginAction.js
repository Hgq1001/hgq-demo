/**
 * @Author:hgq
 * @Describe:
 */


export const Login = (params) => {
    return (dispatch) => {
        dispatch({
            type: 'LOGIN',
            data: params,
        });
    };
};
