<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = undefined;
  export let ariaHidden = false;
  export let title = null;
  export let desc = null;

  let className = undefined;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12,8C12,8 22,8 22,11C22,11 22.09,14.36 21.75,14.25C21,11 12,11 12,11C12,11 3,11 2.25,14.25C1.91,14.36 2,11 2,11C2,8 12,8 12,8M12,12C20,12 20.75,14.25 20.75,14.25C19.75,17.25 19,18 15,18C12,18 13,16.5 12,16.5C11,16.5 12,18 9,18C5,18 4.25,17.25 3.25,14.25C3.25,14.25 4,12 12,12Z" fill="{color}"/></svg>