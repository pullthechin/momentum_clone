import TodosContainer from './containers/TodosContainer';
import Clock from './components/Clock';
import NameContainer from './containers/NameContainer';
import styled from 'styled-components';
import PhotoContainer from './containers/PhotoContainer';
import WeatherContainer from './containers/WeatherContainer';
import SearchContainer from './containers/SearchContainer';

const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

function App() {
  return (
    <>
      <MainWrap>
        <Clock />
        <NameContainer />
        <PhotoContainer />
        <WeatherContainer />
        <SearchContainer />
      </MainWrap>
      <TodosContainer />
    </>
  );
}

export default App;
