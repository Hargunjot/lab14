
add = function() 
{  result =  parseInt(jQuery('#operand_1').html()) +  parseInt(jQuery('#operand_2').html());    
    jQuery('#result').html(result);
}
sub = function() 
{  result =  parseInt(jQuery('#operand_1').html()) -  parseInt(jQuery('#operand_2').html());    
    jQuery('#result').html(result);
}
mul = function() 
{  result =  parseInt(jQuery('#operand_1').html()) *  parseInt(jQuery('#operand_2').html());    
    jQuery('#result').html(result);
}
div = function() 
{  result =  parseInt(jQuery('#operand_1').html()) /  parseInt(jQuery('#operand_2').html());    
    jQuery('#result').html(result);
}
setup = function() {    
    jQuery('#add_button').click(add)
    jQuery('#sub_button').click(sub)
    jQuery('#mul_button').click(mul)
    jQuery('#div_button').click(div)
}
jQuery(document).ready(setup)