export default (type) => {
    const container = document.createElement(type);
    const content = document.createElement('div');

    container.classList.add('container');
    content.classList.add('container-content');

    container.append(content);

    return container;
};