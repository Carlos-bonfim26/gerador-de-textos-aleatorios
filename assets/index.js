function generate(){
    let quotes = {
        '― Charlotte Brontë, Jane Eyre': 'I am no bird; and no net ensnares me: I am a free human being with an independent will.', '― Coco Chanel': 'Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.', '― Mahatma Gandhi':'Freedom is not worth having if it does not include the freedom to make mistakes.','― Benjamin Franklin': 'They who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety.', '― Toni Morrison':'You wanna fly, you got to give up the shit that weighs you down.'
    }
    let authors = Object.keys(quotes);
 let author = authors[Math.floor(Math.random() * authors.length)];

 let quote = quotes[author];

 document.getElementById('quote').innerHTML = quote;

 document.getElementById('author').innerHTML = author;
}