let content = document.getElementById('content');
let examLabsPopup = document.querySelector('.exam-labs-popup');

if (content) {
    content.addEventListener('click', function(e) {
        let newWin = window.open('modal-invoice-page.html', 'example', 'width=900,height=950');
    
          let div = newWin.document.createElement('div'),
              body = newWin.document.body;
    });
}

