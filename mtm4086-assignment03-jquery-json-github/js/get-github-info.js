$('#save').click(function () {
    // add loading image to div
    $('#loading').html('<img src="http://preloaders.net/preloaders/287/Filling%20broken%20ring.gif"> Loading...');
    
    // run ajax request
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.github.com/users/nugentmichael",
        success: function (data) {
            // replace div's content with returned data
            // setTimeout added to show loading
            console.log(data);
            setTimeout(function () {
                $('#save').hide();
                $('#loading').html('<img src="' + data.avatar_url + '"><br>' + data.login +  '<br><a href="' + data.html_url  + '" target="_blank">' + data.html_url + '</a><br> Public Repos:&nbsp;' + data.public_repos + '<br>' + data.created_at);
                $('body').css('background-image', 'url(images/me-blur.jpg)');
                $('body').css('background-size', 'cover');
                $('body').css('color', '#FFF');
            }, 2000);
        }
    });
});