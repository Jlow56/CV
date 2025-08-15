console.log("utils.ts chargé correctement ✅");
export function toggleTheme() {
  const body = document.body;
  const toggle = document.querySelector('.theme-toggle');
  const isDark = body.classList.toggle('dark-theme');
  if (toggle) toggle.textContent = isDark ? '☀️' : '🌙';
}

export function downloadPDF() {
  alert('Téléchargement du CV PDF de Jean-Louis Jean...\n\nDans une application réelle, cela déclencherait le téléchargement du fichier PDF.');
}

export function easterHegg() {
  console.log(`
    ╔═══════════════════════════════════════════════════╗
    ║  🚀 Salut recruteur tech ! 🚀                    ║
    ║  Tu inspectes le code ? Parfait ! 👨‍💻              ║
    ║  Ce CV interactif montre mes compétences en :     ║
    ║  • HTML5/CSS3 avec animations                     ║
    ║  • JavaScript ES6+                                ║
    ║  • Responsive Design                              ║
    ║  • UX/UI moderne                                  ║
    ║  Prêt pour un entretien ? 😊                      ║
    ║  📧 jean-louis.jean@outlook.com                   ║
    ║  📞 06.28.79.28.30                                ║
    ╚═══════════════════════════════════════════════════╝
  `);
}

export async function loadGitHubStats() {
  try {
    const response = await fetch('https://api.github.com/users/Jlow56/repos');
    const contentType = response.headers.get("content-type");
    if (!response.ok || !contentType?.includes("application/json")) {
      throw new Error(`Bad response: ${response.status}`);
    }
    const data = await response.json();
    console.log('GitHub stats:', data);
  } catch (error) {
    console.error("Erreur GitHub API:", error);
  }
}