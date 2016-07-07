/**
 * Created by Grant on 7/7/16.
 */



javascript: (function () {
    var documentText = document.getElementsByTagName('body')[0].innerText.toLowerCase().trim().replace(/[,;./"()]/g,'').split(/[\s\/]+/g).sort(),
        words,
        wordDictionary = {},
        modelDiv = document.createElement('div');
    modelDiv.setAttribute("style", "position: fixed; z-index: 1; left: 100px; top: 0; width: 500px;  height: 100%;  overflow: auto; background-color: #fff; border:1px solid #000; padding:15px;");

    var wordsFilter = function (word) {
        return word.length > 4;
    };

    var wordsMap = function (word) {
        if (wordDictionary[word]) {
            wordDictionary[word] = wordDictionary[word] + 1;
        } else {
            wordDictionary[word] = 1;
        }
    };

    var setFontSize = function (key, span) {
        var newFontSize = 20;
        if (wordDictionary[key] > 1) {
            newFontSize = newFontSize + (wordDictionary[key] * 2);
        }

        span.setAttribute("style", "font-size: " + newFontSize + "px; height:" + newFontSize + "px; margin: 10px; float: left");
    };

    var createModel = function () {
        var keys = Object.keys(wordDictionary);

        keys.forEach(function (key) {
            var newText = document.createTextNode(key),
                newSpan = document.createElement('div'),
                fontSize = 20;
            newSpan.appendChild(newText);

            setFontSize(key, newSpan);

            modelDiv.appendChild(newSpan);
        });

        document.body.appendChild(modelDiv);
    };


    words = documentText.filter(wordsFilter);
    words.map(wordsMap);

    createModel();

    console.log(wordDictionary);
})();
