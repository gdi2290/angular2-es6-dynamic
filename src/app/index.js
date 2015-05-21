import {BrowserDomAdapter} from 'angular2/src/dom/browser_adapter';
BrowserDomAdapter.makeCurrent();
import {bootstrap, Component, View} from 'angular2/angular2';


@Component({
  selector: 'my-app'
})
@View({
  template: `<h1>Hello</h1>`
})
class App {
  constructor() {
    console.log('wat');
  }
}

export function main() {
  return bootstrap(App);
};
