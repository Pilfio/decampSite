// JavaScript Document
function post_to_url(path, params, method) {
        method = method || "post";

        var form = document.createElement("form");

        //Move the submit function to another variable
        //so that it doesn't get overwritten.
        form._submit_function_ = form.submit;

        form.setAttribute("method", method);
        form.setAttribute("action", path);

        for(var key in params) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", "nome");
			hiddenField.setAttribute("email", "a@ab.ab");
			hiddenField.setAttribute("username", "key");
			hiddenField.setAttribute("password", "password");
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }

        document.body.appendChild(form);
        form._submit_function_(); //Call the renamed function.
    }
    post_to_url("http://localhost/decampsite/register", { submit: "submit" },"post" ); //Works!