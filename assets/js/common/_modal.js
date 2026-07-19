const modal = window.zeroGallery.modal;
const bodyEl = document.body;
const prevBodyOverflow = document.body.style.overflow;

modal.get = (id) => {
  return modal.list?.[id].modalEl;
};

modal.open = (id) => {
  const modalEl = modal.get(id);
  if (modalEl !== undefined) {
    modalEl.showModal();
    bodyEl.style.overflow = "hidden";
  }
};

modal.close = (id) => {
  const modalEl = modal.get(id);
  if (modalEl !== undefined) {
    modalEl.close();
    bodyEl.style.overflow = prevBodyOverflow;
  }
};

const handleBtnClick = (id, data, btn, click) => {
  btn.disabled = true;
  const [handle, ...params] = click;
  const [prefix, fnName] = handle.split(".");
  let func;
  switch (prefix) {
    case "sys":
      func = modal.sysFuncs[fnName];
      break;
    case "usr":
      func = modal.usrFuncs[fnName];
      break;
  }
  if (func === undefined) throw new Error(`undefined function: ${handle}`);
  func(id, data, ...params);
  btn.disabled = false;
};

Object.entries(modal.list).forEach(([id, data]) => {
  const modalEl = data.modalEl;
  if (data.trigger) {
    data.trigger.elem.addEventListener("click", (event) => {
      const btn = data.trigger.elem;
      btn.disabled = true;
      modal.open(id);
      btn.disabled = false;
    });
  }
  if (data.close) {
    data.close.elem.addEventListener("click", (event) => {
      handleBtnClick(id, data, data.close.elem, data.close.click);
    });
  }
  if (data.confirm) {
    data.confirm.elem.addEventListener("click", (event) => {
      handleBtnClick(id, data, data.confirm.elem, data.confirm.click);
    });
  }
  if (data.cancel) {
    data.cancel.elem.addEventListener("click", (event) => {
      handleBtnClick(id, data, data.cancel.elem, data.cancel.click);
    });
  }
});

// sysFuncs

modal.sysFuncs = {};

modal.sysFuncs.open = (id, data, param) => {
  modal.open(id);
};

modal.sysFuncs.close = (id, data, param) => {
  modal.close(id);
};

// usrFuncs

modal.usrFuncs = {};
