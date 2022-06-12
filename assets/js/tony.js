  /**
   * Get Top Language
   */
  function getTopLanguage() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200 || xhr.status === 201) {
                console.log(xhr.responseText);
            } else {
                console.error(xhr.responseText);
            }
        }
    };
    xhr.open('GET', 'https://github-readme-stats.vercel.app/api/top-langs/?username=ghy1675');
    xhr.send();
  }