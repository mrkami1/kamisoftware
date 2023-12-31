import Navbar from "../components/navbar";

export default function FynatrackPrivacy() {
    return (
        <div>
            <Navbar />
            <div style={{
                marginLeft: '10%', 
                marginRight: '10%', 
                color: 'white', 
                fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                textAlign: 'left'
            }}>
                <h1>Fynatrack Privacy Policy</h1>

                <h2>Last updated: November 14, 2023</h2>

                <p>
                    Kami Software ("us", "we", or "our") operates the Fynatrack mobile application (the
                    "Service").
                </p>

                <p>
                    This page informs you of our policies regarding the collection, use, and disclosure
                    of personal data when you use our Service and the choices you have associated with
                    that data.
                </p>
                <h3>Information Collection and Use</h3>

                <p>
                    We collect and process the following information for the purposes described in this
                    Privacy Policy:
                </p>
                <h4>Personal Data</h4>

                <ol>
                    <li><p>Full Name</p></li>

                    <p>
                        When you use our Service, we may ask you to provide your full name. This
                        information is used to personalize your experience within the app.
                    </p>

                    <li><p>Email Address</p></li>

                    Google Drive Access (Optional) If you choose to grant access to your
                    Google Drive, we will only use this access to provide specific features within the
                    app, such as Google Drive Backups and backup schedules. We will not store or share the contents of your Google Drive unless
                    explicitly authorized by you for a specific purpose.
                </ol>
                <h3>Data Security</h3>

                <p>
                    We take the security of your data seriously. We implement reasonable and
                    industry-standard security measures to protect your personal information from
                    unauthorized access, disclosure, alteration, and destruction.
                </p>
                <h3>Data Loss and Data Theft</h3>

                <p>
                    Kami Software is not responsible for any data loss or data theft that may
                    occur while using our Service. While we implement security measures to protect your
                    personal information, it is important to be aware that no method of transmission
                    over the Internet or electronic storage is 100% secure, and we cannot guarantee
                    absolute security. Use at your own risk.
                </p>
                <h3>Your Choices</h3>

                <p>
                    You have the right to access, update, or delete your personal information at any
                    time. If you would like to exercise these rights, please contact us at <a href="mailto:kamisoftwaredev@gmail.com">kamisoftwaredev@gmail.com</a>.
                </p>
                <h3>Changes to This Privacy Policy</h3>

                <p>
                    We may update our Privacy Policy from time to time. Thus, we advise you to review
                    this page periodically for any changes. We will notify you of any changes by posting
                    the new Privacy Policy on this page.
                </p>
                <h3>Contact Us</h3>

                <p>
                    If you have any questions or suggestions about our Privacy Policy, please contact us
                    at <a href="mailto:kamisoftwaredev@gmail.com">kamisoftwaredev@gmail.com</a>.
                </p>
            </div>
        </div>
    )
}