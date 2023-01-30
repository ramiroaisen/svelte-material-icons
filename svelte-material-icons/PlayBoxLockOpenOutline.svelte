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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M23 17.3V20.8C23 21.4 22.4 22 21.7 22H16.2C15.6 22 15 21.4 15 20.7V17.2C15 16.6 15.6 16 16.2 16V13.5C16.2 12.1 17.6 11 19 11C20.4 11 21.8 12.1 21.8 13.5V14H20.5V13.5C20.5 12.7 19.8 12.2 19 12.2C18.2 12.2 17.5 12.7 17.5 13.5V16H21.8C22.4 16 23 16.6 23 17.3M18 5H4V19H13V21H4C2.89 21 2 20.1 2 19V5C2 3.89 2.89 3 4 3H18C19.1 3 20 3.89 20 5V9.1L19 9L18 9.1V5M9 8L14 12L9 16V8Z" fill="{color}"/></svg>