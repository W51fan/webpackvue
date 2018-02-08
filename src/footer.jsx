export default{
    data(){
        return{
            author:'van'
        }
    },
    render(){
        return (
            <div id="footer">
                <span>written by {this.author}</span>
            </div>
        )
    }
}
