var $username = $('#username'),
    $phone = $('#phone'),
    $pwd = $('#pwd'),
    $regist = $('#regist'),
    $tip1 = $('#tip1'),
    $tip2 = $('#tip2'),
    var $pwdclick = 0;

$username.focusout(function() {
    $tip1.css('display', 'none');
    if (!validate('#username')) {
        $tip1.css('display', 'none');
        $username.select();
    }
})
$username.focus(function() {
    $tip1.css('display', 'block');
})

$tel.focusout(function() {
    if (!validate('#phone')) {
        $tel.select();
    }
})

$pwd.focusout(function() {
    $pwdclick++;
    $tip2.css('display', 'none');
    if (!validate('#pwd')) {
        $tip2.css('display', 'none');
        $pwd.select();
    }
})
$pwd.focus(function() {
    $tip2.css('display', 'block');
})

function validate(e) {
    var $data = $(e);
    var $msg = $(e + '-validation-message');
    if (e === '#username' && $data.val()) {
        if (/[\u4e00-\u9fa5]/.test($data.val())) {
            var $allLength = $data.val().length;
            var $ChineseLength = ($data.val()).match(/[\u4e00-\u9fa5]/g).length;
            var $length = $ChineseLength + $allLength;
            if ($length > 14) {
                $msg.html('用户名不能超过7个汉字或14个字符');
                return false;
            }
        } else if (!/^[a-zA-Z0-9_\u4e00-\u9fa5]*$/.test($data.val()) || /^[0-9]*$/.test($data.val()) && $data.val()) {
            $msg.html('用户名仅支持中英文、数字和下划线，且不能为纯数字');
            return false;
        }
    }
    if (e === '#phone') {
        if (!/^[1][3,4,5,7,8][0-9]{9}$/.test($data.val()) && $data.val()) {
            $msg.html('手机号码格式不正确');
            return false;
        }
    }
    if (e === '#pwd') {
        if ((!/^(?![\d]+$) (?![a-zA-Z]+$) (?![!#$%^&*]+$) [\da-zA-Z!#$%^&*]{8,14}$/.test($data.val()) && $data.val()) ||
            (!$data.val() && $pwdclick)) {
            $msg.html('密码设置不符合要求');
            return false;
        }
    }
    $msg.html('');
    return true;
}
$regist.click(function() {
    if (validate('#username') && validate('#phone') && validate('#pwd') && $code.val()) {
        alert('恭喜您，注册成功！');
    }
})