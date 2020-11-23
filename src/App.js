import React from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
class App extends React.Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
    ],
  };
  handleDelete = (counterId) => {
    const { counters } = this.state;
    const updatedCounters = counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: updatedCounters });
  };
  handleIncrement = (counter) => {
    const { counters } = this.state;
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    const { counters } = this.state;
    const updatedCounters = counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: updatedCounters });
  };
  render() {
    return (
      <>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </>
    );
  }
}
export default App;
