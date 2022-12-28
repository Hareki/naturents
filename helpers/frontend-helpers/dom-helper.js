export function scrollIntoId(event, id, block) {
  const anchor = (
    event?.target.ownerDocument || document
  ).querySelector(`#${id}`);

  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: block });
  }
}
