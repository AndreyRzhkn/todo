//modules
import { toJS } from "mobx";
import Todo from "./modules/Todo";
import { observer } from "mobx-react-lite";
//store
import todo from "services/mobxStore";
//styles
import GlobalStyle from "styles";

const App = observer(() => {
    return (
        <>
            <Todo todo={toJS(todo.list)} />
            <GlobalStyle />
        </>
    );
});

export default App;
