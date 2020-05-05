%{
#define YY_INPUT(buf,result,max_size) \
	{ int digit; \
	  int c = getc(yyin); \
	  result = c == EOF ? 0 : 1; \
	  if(c == '%') { \
		  c = getc(yyin); \
		  digit = c >= 'A' ? ((c & 0xdf) - 'A') + 10 : c - '0'; \
		  digit *= 16; \
		  c = getc(yyin); \
		  digit += c >= 'A' ? ((c & 0xdf) - 'A') + 10 : c - '0'; \
		  buf[0] = (char) digit; \
	  } \
	  else if(c == '+') \
		  buf[0] = ' '; \
	  else \
		  buf[0] = (char) c; \
	}
%}
%%
"ans=1"\&?	{ send_file("tranq-1-1.wrong1") ; return(1) ; }
"ans=2"\&?	{ send_file("tranq-1-1.right2") ; return(1) ; }
"ans=3"\&?	{ send_file("tranq-1-1.wrong3") ; return(1) ; }
"\n"	{}
%%
#include <stdio.h>

main()
{
	if(!yylex())
		send_file("tranq-1-1.none");
}

send_file(s)
char *s;
{
	FILE *fp ;
	char buf[81];

	printf("Content-type: text/html\n\n");
	fp = fopen(s, "r");
	if(fp) {
		while(fgets(buf, 80, fp)) {
			printf("%s", buf);
		}
		fclose(fp);
	}
}
