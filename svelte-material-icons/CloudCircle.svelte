<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M8.5 16H16Q17.25 16 18.13 15.13T19 13Q19 11.75 18.13 10.88T16 10Q15.8 8.55 14.68 7.53 13.55 6.5 12.15 6.5 10.88 6.5 9.84 7.15 8.8 7.8 8.3 9 6.88 9.13 5.94 10.09 5 11.05 5 12.5 5 13.95 6.03 15 7.05 16 8.5 16M12 22Q9.93 22 8.1 21.21 6.28 20.43 4.93 19.08 3.58 17.73 2.79 15.9 2 14.08 2 12T2.79 8.1Q3.58 6.28 4.93 4.93 6.28 3.58 8.1 2.79 9.93 2 12 2T15.9 2.79Q17.73 3.58 19.08 4.93 20.43 6.28 21.21 8.1 22 9.93 22 12T21.21 15.9Q20.43 17.73 19.08 19.08 17.73 20.43 15.9 21.21 14.08 22 12 22Z" fill="{color}"/></svg>