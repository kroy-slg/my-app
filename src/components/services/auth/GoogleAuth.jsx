import { useGoogleLogin } from "@react-oauth/google";
import "../../../assets/css/GoogleAuth.css";

export default function GoogleAuth({ onLogin }) {
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const res = await fetch(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                {
                    headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
                }
            );
            const data = await res.json();
            onLogin(data);
        },
    });

    return (
        <div className="google-auth-container">
            <button onClick={() => login()} className="google-btn">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/330px-Google_Favicon_2025.svg.png"
                    alt="Google icon"
                    className="google-icon"
                />
                Sign in with Google
            </button>
        </div>
    );
}
