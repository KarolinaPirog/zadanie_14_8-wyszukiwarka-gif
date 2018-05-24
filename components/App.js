App = React.createClass({
    render: function() {
var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };
return (
          <div style={styles}>
                <h1>Wyszukiwarka GIFow!</h1>
                <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
                <Search />
            <Gif />
          </div>
        );
    }
});
