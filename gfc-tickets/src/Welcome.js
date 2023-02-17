import handykid from './assets/handykid.jpg';

const Welcome = () => {
    return (
        <div className="welcome">
            <div className="welcomeImg">
                <img src={handykid} alt="Maintenance photo" />
                <p className="imgCaption"><a href="https://flickr.com/photos/andercute/2468671564/in/photolist-4L9A3Q-opWx4r-38BU3E-QTaiEA-poVPpT-afyqy7-oymj-ADmkUp-efYdD8-yL54ei-2krqtBv-7YaiaG-dAZ4p2-dEkak5-YDswV-2gCVpmq-2LtDmR-bJwksM-56kfbe-E16rF-dchoGu-8s8qL6-3ioWZe-6KMiNn-fmZtAt-6RgUdj-eDCPWR-341sFL-eaJcac-7tuqeZ-7uRey-27QvNYG-cocqQS-8Jqp3t-ece7BZ-ece7zT-dg9jvq-ao3ac5-ao39WL-7fbkfT-abXx1D-4ANaki-6hULxu-2aAg39a-dsVv2U-gvcac-iQQPto-xpud8-69Skk4-7oYsTS">Handyman B"</a> by <a href="https://flickr.com/photos/andercute/">the cute andersons</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">CC BY-NC-ND 2.0</a></p>
            </div>
            <div className="options">
                <p>ENTER TICKET</p>
                <p>SCAN QR CODE</p>
            </div>
        </div>
    );
}
 
export default Welcome;