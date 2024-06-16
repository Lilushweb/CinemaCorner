
import './App.css'
import {useAppSelector, useAppDispatch} from "./store/hooks/redux.ts";
import {userSlise} from "./store/reducers/UserSlice.ts";
import {useEffect} from "react";
import {fetchUsers} from "./store/reducers/ActiionCreators.ts";
import PostContainer from "./components/PostContainer.tsx";


function App() {
  // const dispatch = useAppDispatch()
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  // useEffect(() => {
  //   dispatch(fetchUsers())
  // },[])
  return (
    <div className="App">
      {/*{JSON.stringify(users,null,2)}*/}
      {/*{isLoading &&<h1>Идет загрузка...</h1>}*/}
      {/*{error && <h1>{error}</h1>}*/}
      <PostContainer/>
    </div>
  )
}

export default App
