import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePallete } from './colorHelpers';
import * as ROUTES from './constants/routes';
import './App.css';
import PaletteList from './PaletteList';

const App = () => {
  const findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id);
  };
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <PaletteList palettes={seedColors} />
        </Route>
        <Route
          exact
          path={ROUTES.PALETTECOMPONENT}
          render={(routeProps) => (
            <Palette
              pallete={generatePallete(findPalette(routeProps.match.params.id))}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
