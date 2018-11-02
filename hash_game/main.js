var round = 1;
var matrix = Array(3);

matrix['a'] = Array(3);
matrix['b'] = Array(3);
matrix['c'] = Array(3);

matrix['a'][1] = 0;
matrix['a'][2] = 0;
matrix['a'][3] = 0;

matrix['b'][1] = 0;
matrix['b'][2] = 0;
matrix['b'][3] = 0;

matrix['c'][1] = 0;
matrix['c'][2] = 0;
matrix['c'][3] = 0;

$(document).ready(function(){
    $('#start_button').click(function(){
        if ($('#input_1').val() == '') {
            if ($('#input_2').val() == '') {
                alert('Apelidos dos jogadores 1 e 2 invalidos');
                return false;
            } else {
                alert('Apelido do jogador 1 invalido')
                return false;
            }
        } else {
            if ($('#input_2').val() == '') {
                alert('Apelido do jogador 2 invalido');
                return false;
            }
            if ($('#input_1').val() == $('#input_2').val()) {
                alert('Apelidos dos jogadores 1 e 2 invalidos');
                return false;
            }
        }
       
        $('#span_input_1').html($('#input_1').val());
        $('#span_input_2').html($('#input_2').val());
        
        $('#registration_screen').hide();
        $('#game').show();
    });

    $('.interaction_area').click(function(){
        var id_interaction_area = this.id;
        played(id_interaction_area);
    });

    function played (id) {
        var point = null;
        var symbol = null;  
        var position = id.split('-');
        
        if (round % 2 == 1) {
            point = 1;
            symbol = 'url(imagens/marcacao_1.png)';
        } else {
            point = -1;
            symbol = 'url(imagens/marcacao_2.png)';
        }

        $('#' + id).css('background-image', symbol);
        matrix[position[0]][position[1]] = point;
        $('#' + id).off();

        verification();

        round++;
    }

    function verification() {
        var scoring = 0;

        for (var i = 1; i <= 3; i++) {
            scoring = scoring + matrix['a'][i];
        }    
        win(scoring);

        for (var i = 1; i <= 3; i++) {
            scoring = scoring + matrix['b'][i];
        }    
        win(scoring);

        for (var i = 1; i <= 3; i++) {
            scoring = scoring + matrix['c'][i];
        }    
        win(scoring);

        for (var l = 1; l <= 3; l++) {
            scoring = matrix['a'][l] + matrix['b'][l] + matrix['c'][l];
            win(scoring);
        }

        scoring = matrix['a'][1] + matrix['b'][2] + matrix['c'][3];
        win(scoring);
        
        scoring = matrix['a'][3] + matrix['b'][2] + matrix['c'][1];
        win(scoring);
    }

    function win(scoring) {
        var name1 = $('#input_1').val();
        var name2 = $('#input_2').val();

        if (scoring == 3) {
            alert(name1 + ' venceu!!!');
            $('.interaction_area').off();
        }
        if (scoring == -3) {
            alert(name2 + ' venceu!!!');
            $('.interaction_area').off();
        }

        scoring = 0;
    }
});