

const NotFound = () => {
    return (
            <div className="container">
                <h1 className='error-text'>404 Error Page</h1>
                <section class="error-container">
                    <span class="four"><span class="screen-reader-text">4</span></span>
                    <span class="zero"><span class="screen-reader-text">0</span></span>
                    <span class="four"><span class="screen-reader-text">4</span></span>
                </section>

                <div class="link-container">
                    <a target="_blank" href="/" class="more-link">Visit the original article</a>
                </div>
            </div>
    )
};

export default NotFound;