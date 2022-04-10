import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
//import {javascript} from "@codemirror/lang-javascript"
//import {example} from "lang-example"
import {example} from "./lang-example.js"

let editor = new EditorView({
  state: EditorState.create({
	doc: `(defun check-login (name password) ; absolutely secure
    (if (equal name "admin")
      (equal password "12345")
      #t))`,
    extensions: [
      basicSetup,
      //javascript(),
      example()
    ]
  }),
  parent: document.body
})
