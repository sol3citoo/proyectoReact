function Login({ setUsuarioLogin, usuarioEstaLogueado }) {

    const entrar = async (e) => {
        e.preventDefault();

        if (usuarioEstaLogueado) return;

        const form = e.target;

        try {
            const resp = await fetch("http://localhost:3004/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: form.email.value, password: form.password.value })
            });

            if (resp.ok) {
                const data = await resp.json();
                localStorage.setItem('token', data.accessToken);
                localStorage.setItem('usuario', JSON.stringify(data.user));
                setUsuarioLogin(data.user);
            } else {
                alert("Credenciales incorrectas. Revisa el email o la contraseña.");
            }
        } catch (e) {
            console.error("Error en el login:", e);
        }
    };

    return (
        <div>
            <h2>Iniciar sesión</h2>
            <form onSubmit={entrar}>
                <input type="email" name="email" placeholder="Email" required/>
                <input type="password" name="password" placeholder="Contraseña" required/>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;
