import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { QuestionsController } from "./controllers/QuestionsController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: QuestionsController,
    view: /*html*/`
    <section class="row py-5">
      <div class="col-12 text-center">
        <img class="img-15 rounded-5"
          src="https://images.unsplash.com/photo-1599508704512-2f19efd1e35f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVlc3Rpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="question mark image">
      </div>
    </section>
    <div id="questions"></div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]