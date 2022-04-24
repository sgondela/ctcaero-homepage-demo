const updateCopyright = () => {
    const thisYear = new Date().getFullYear());
    document.getElementById('copyright') = `Copyright &copy; ${thisYear} Coast to Coast Aerospace, LLC. All rights reserved.`
}

document.addEventListener("load", updateCopyright);