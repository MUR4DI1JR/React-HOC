import React, {createContext, useState} from 'react';
import ButtonUI from "./utils/ButtonUI";
import {composeComponent} from "./hoc/composeComponent";
import CatComponent from "./components/catComponent";
import MyComponent from "./components/MyComponent";
import {WithLoading} from "./hoc/withLoading";
import TypingText from "./utils/typingText";
import Loader from "./hoc/loader";
import windowBrowser from "./hoc/windowBrowser";
import windowView from "./components/windowView";
import ColorChange from "./hoc/colorChange";
import ItemComponent from "./components/itemComponent";

const App = () => {

    // const ComposedCatComponent = composeComponent(CatComponent);
    //
    // const HelloWorldComponent = composeComponent(MyComponent);
    //
    // const IsLoadingComponent = WithLoading(MyComponent);
    // const IsLoadingCatComponent = WithLoading(CatComponent);

    const LoadingText = Loader(MyComponent, 3000);
    const LoadingCatComponent = Loader(CatComponent, 6000);

    const MyComponentWithWindowSize = windowBrowser(windowView);

    const ColorChangeComponent = ColorChange(ItemComponent, "dark");

    return (
        <div>
            <LoadingText/>
            <LoadingCatComponent/>
            <MyComponentWithWindowSize/>
            <ColorChangeComponent/>
            {/*<ComposedCatComponent/>*/}
            {/*<HelloWorldComponent/>*/}
            {/*<IsLoadingComponent/>*/}
            {/*<IsLoadingCatComponent/>*/}
        </div>
    );
};

export default App;