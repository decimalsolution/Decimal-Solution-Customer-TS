<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
    <xsl:output method="html" encoding="UTF-8"/>
    <xsl:template match="/">
        <html>
        <head>
            <title>Sitemap</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }
                th, td {
                    padding: 10px;
                    border: 1px solid #ddd;
                    text-align: left;
                }
                th {
                    background-color: #f4f4f4;
                    font-weight: bold;
                }
                a {
                    color: #2a6ebb;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <h2>Sitemap</h2>
            <table>
                <tr>
                    <th>URL Location</th>
                    <th>Last Modification Date</th>
                    <th>Change Frequency</th>
                    <th>Priority</th>
                </tr>
                <xsl:for-each select="s:urlset/s:url">
                    <tr>
                        <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                        <td><xsl:value-of select="s:lastmod"/></td>
                        <td><xsl:value-of select="s:changefreq"/></td>
                        <td><xsl:value-of select="s:priority"/></td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
