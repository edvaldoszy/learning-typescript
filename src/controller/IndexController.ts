import Controller from "../core/Controller";
import View from "../core/View";
import IndexView from "../view/IndexView";

class IndexController implements Controller {
    
    public home(): View {

        var v = new IndexView();
        return v;
    }

    public static main(): void {
        var controller = new IndexController();
        var view = controller.home();
        view.render();
    }
}

export default IndexController;
