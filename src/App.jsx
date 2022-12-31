import React from "react";
import { Login } from "./pages/Login";
import { MainPage } from "./pages/Page";
import { useSelector, useDispatch } from "react-redux";
import { setAccessToken } from "./Redux/appSlice";

function App() {
	const dispatch = useDispatch();

	const token = localStorage.getItem("accessToken");

	React.useEffect(() => {
		if (token) {
			dispatch(setAccessToken(token));
		}
	}, [token, dispatch]);

	const hasAccessToken = useSelector((state) => state.app.accessToken);

	return hasAccessToken ? <MainPage /> : <Login />;
}

export default App;
