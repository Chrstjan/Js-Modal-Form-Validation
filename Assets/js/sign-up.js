const modalContainer = document.querySelector(".sign-up");
const openBtn = document.getElementById("openModal");

const formModal = document.createElement("div");

let isOpen = false;

const signUpForm = () => {
  if (isOpen) {
    return;
  }

  isOpen = true;

  const formElement = document.createElement("form");
  const formFieldset = document.createElement("fieldset");
  const closeBtn = document.createElement("span");
  closeBtn.innerHTML = "<a>&times;</a>";
  closeBtn.classList.add("x-btn");

  //Helper funtions
  const createContactLabelElement = (text, forInput) => {
    const label = document.createElement("label");
    label.setAttribute("for", forInput);
    label.textContent = text;
    return label;
  };

  const createContactInputElement = (type, className, placeholder) => {
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.classList.add(className);
    input.setAttribute("placeholder", placeholder);
    return input;
  };

  const createContactInputButtonElement = (type, className, value) => {
    const inputBtn = document.createElement("input");
    inputBtn.setAttribute("type", type);
    inputBtn.classList.add(className);
    inputBtn.setAttribute("value", value);
    return inputBtn;
  };

  const fNameLabel = createContactLabelElement("First Name", "fName");
  const fName = createContactInputElement("text", "fName", "John");

  const lNameLabel = createContactLabelElement("Last Name", "lName");
  const lName = createContactInputElement("text", "lName", "Doe");

  const emailLabel = createContactLabelElement("Email", "email");
  const email = createContactInputElement("email", "email", "none@fake.com");

  const validateInput = (input, regEx, errorMessage) => {
    const trimmedValue = input.value.trim();
    const isValid = regEx.test(trimmedValue);

    if (isValid) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
      displayErrorMessage(errorMessage);
    }

    return isValid;
  };

  const displayErrorMessage = (message) => {
    errorTextContainer.textContent = message;
  };

  const formValidation = (e) => {
    const nameRegExp = /^[a-zA-Z]{2,17}$/;
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    const isFNameValid = validateInput(
      fName,
      nameRegExp,
      "First Name must be at least 2 characters"
    );
    const isLNameValid = validateInput(
      lName,
      nameRegExp,
      "Last Name must be at least 2 characters"
    );
    const isEmailValid = validateInput(
      email,
      emailRegExp,
      "Email must be a valid email"
    );

    if (isFNameValid && isLNameValid && isEmailValid) {
      contactFieldset.innerHTML = "";
      const recivedMessage = document.createElement("h2");
      recivedMessage.textContent =
        "Message recived. Thank you for your message";
      contactFieldset.appendChild(closeContactBtn);
      contactFieldset.appendChild(recivedMessage);
    } else {
      e.preventDefault();
    }
  };

  submitBtn.addEventListener("click", formValidation);

  const resetBtn = createContactInputButtonElement(
    "reset",
    "resetBtn",
    "Reset"
  );

  const submitBtn = createContactInputButtonElement(
    "submit",
    "submitBtn",
    "Send"
  );

  const contactBtnContainer = document.createElement("span");
  contactBtnContainer.classList.add("btn-container");
  contactBtnContainer.appendChild(resetBtn);
  contactBtnContainer.appendChild(submitBtn);

  const errorTextContainer = document.createElement("div");
  errorTextContainer.classList.add("errorContainer");

  const appendChildren = (parent, elements) => {
    elements.forEach((element) => {
      parent.appendChild(element);
    });
  };

  appendChildren(formFieldset, [
    closeBtn,
    fNameLabel,
    fName,
    lNameLabel,
    lName,
    emailLabel,
    email,
    contactBtnContainer,
    errorTextContainer,
  ]);

  formElement.appendChild(formFieldset);
  formModal.appendChild(formElement);
  modalContainer.appendChild(formModal);

  closeBtn.addEventListener("click", () => {
    modalContainer.remove();
    isOpen = false;
  });
};
openBtn.addEventListener("click", signUpForm);
