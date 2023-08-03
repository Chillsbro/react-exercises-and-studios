export default function HobbyList() {
    const hobbyLinks = ['https://www.pdga.com/', 'https://www.snhu.edu/about-us/newsroom/stem/what-is-computer-programming'];
    return (
        <div>
            <h3>My Hobbies</h3>
            <a href = {hobbyLinks[0]}>Disc Golf</a>
            <a href = {hobbyLinks[1]}>Programming</a>
            
        </div>
        
    )

}