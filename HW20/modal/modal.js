class Modal {
  #elem;
  #template = '<div class="modal-backdrop"><div class="modal-content"><div class="modal-header"><div class="modal-title">{{title}}</div><span class="modal-btn-close" title="Закрыть">×</span></div><div class="modal-body">{{content}}</div>{{footer}}</div></div>';
  #templateFooter = '<div class="modal-footer">{{buttons}}</div>';
  #templateBtn = '<button type="button" class="{{class}}" data-action={{action}}>{{text}}</button>';
  #eventShowModal = new Event('show.modal', { bubbles: true });
  #eventHideModal = new Event('hide.modal', { bubbles: true });
  #disposed = false;
  #currentId;

  constructor(options = []) {
    this.#elem = document.createElement('div');
    this.#elem.classList.add('modal');
    let html = this.#template.replace('{{title}}', options.title || 'Новое окно');
    html = html.replace('{{content}}', options.content || '');
    const buttons = (options.footerButtons || []).map((item) => {
      let btn = this.#templateBtn.replace('{{class}}', item.class);
      btn = btn.replace('{{action}}', item.action);
      return btn.replace('{{text}}', item.text);
    });
    const footer = buttons.length ? this.#templateFooter.replace('{{buttons}}', buttons.join('')) : '';
    html = html.replace('{{footer}}', footer);
    this.#elem.innerHTML = html;
    document.body.append(this.#elem);
    this.#elem.addEventListener('click', this.#handlerCloseModal.bind(this));
  }

  #handlerCloseModal(e) {
    if (e.target.closest('.modal-btn-close') || e.target.classList.contains('modal-backdrop') || e.target.closest('[data-action="cancel"]')) {
      this.hide();
    }

    if (e.target.closest('[data-action="ok"]')) {
      handleDeleteUser(this.#currentId);
      modal.hide();
    }
  }

  show(id) {
    if (this.#disposed) {
      return;
    }
    this.#currentId = id;
    this.#elem.classList.add('modal-show');
    this.#elem.dispatchEvent(this.#eventShowModal);
  }

  hide() {
    this.#elem.classList.remove('modal-show');
    this.#elem.dispatchEvent(this.#eventHideModal);
  }

  dispose() {
    this.#elem.remove(this.#elem);
    this.#elem.removeEventListener('click', this.#handlerCloseModal);
    this.#disposed = true;
  }

  setBody(html) {
    this.#elem.querySelector('.modal-body').innerHTML = html;
  }

  setTitle(text) {
    this.#elem.querySelector('.modal-title').innerHTML = text;
  }
}

function showModal(){
  modal = new Modal({
    title: 'Delete',
    content: '<div>Do you really want to delete the user?</div>',
    footerButtons: [
      { class: 'btn btn-yes', text: 'Yes', action: 'ok'},
      { class: 'btn btn-no', text: 'No', action: 'cancel'}
    ],
  });
} 

showModal();