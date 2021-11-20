import "./App.css";
import { ApolloProvider } from "@apollo/client";
import client from "./api/client";
import CommentList from "./components/CommentList";
import NewCommentForm from "./components/NewCommentForm";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <NewCommentForm />
        <CommentList />
      </div>
    </ApolloProvider>
  );
}

export default App;
