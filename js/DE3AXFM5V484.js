var data = [
['DAT Dräxlmaier Automotivtechnik GmbH', 'DAI Dräxlmaier Automotive International GmbH', 2],
['DAI Dräxlmaier Automotive International GmbH', 'DAT Dräxlmaier Automotivtechnik GmbH', 2],
['DAI Dräxlmaier Automotive International GmbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 3],
['DIS Dräxlmaier Industrial Solutions GmbH', 'DAI Dräxlmaier Automotive International GmbH', 3],
['DAI Dräxlmaier Automotive International GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 3],
['DST Dräxlmaier Systemtechnik GmbH', 'DAI Dräxlmaier Automotive International GmbH', 3],
['DAI Dräxlmaier Automotive International GmbH', 'DKS Dräxlmaier Kunststoffsysteme GmbH', 2],
['DKS Dräxlmaier Kunststoffsysteme GmbH', 'DAI Dräxlmaier Automotive International GmbH', 2],
['DAI Dräxlmaier Automotive International GmbH', 'DFS Dräxlmaier Fahrzeugsysteme GmbH', 2],
['DFS Dräxlmaier Fahrzeugsysteme GmbH', 'DAI Dräxlmaier Automotive International GmbH', 2],
['DAI Dräxlmaier Automotive International GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 4],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DAI Dräxlmaier Automotive International GmbH', 4],
['DAI Dräxlmaier Automotive International GmbH', 'DFT Dräxlmaier Fahrzeugtechnik GmbH', 2],
['DFT Dräxlmaier Fahrzeugtechnik GmbH', 'DAI Dräxlmaier Automotive International GmbH', 2],
['DAI Dräxlmaier Automotive International GmbH', 'DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 2],
['DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 'DAI Dräxlmaier Automotive International GmbH', 2],
['DAI Dräxlmaier Automotive International GmbH', 'DAP Dräxlmaier Automotivprodukte GmbH', 2],
['DAP Dräxlmaier Automotivprodukte GmbH', 'DAI Dräxlmaier Automotive International GmbH', 2],
['DAI Dräxlmaier Automotive International GmbH', 'Eldra Kunststofftechnik GmbH', 2],
['Eldra Kunststofftechnik GmbH', 'DAI Dräxlmaier Automotive International GmbH', 2],
['DAT Dräxlmaier Automotivtechnik GmbH', 'DFT Dräxlmaier Fahrzeugtechnik GmbH', 3],
['DFT Dräxlmaier Fahrzeugtechnik GmbH', 'DAT Dräxlmaier Automotivtechnik GmbH', 3],
['DFT Dräxlmaier Fahrzeugtechnik GmbH', 'DFS Dräxlmaier Fahrzeugsysteme GmbH', 4],
['DFS Dräxlmaier Fahrzeugsysteme GmbH', 'DFT Dräxlmaier Fahrzeugtechnik GmbH', 4],
['DFT Dräxlmaier Fahrzeugtechnik GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 2],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DFT Dräxlmaier Fahrzeugtechnik GmbH', 2],
['DFT Dräxlmaier Fahrzeugtechnik GmbH', 'DAI Dräxlmaier Automotive International GmbH', 2],
['DAI Dräxlmaier Automotive International GmbH', 'DFT Dräxlmaier Fahrzeugtechnik GmbH', 2],
['DFT Dräxlmaier Fahrzeugtechnik GmbH', 'DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 3],
['DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 'DFT Dräxlmaier Fahrzeugtechnik GmbH', 3],
['DFT Dräxlmaier Fahrzeugtechnik GmbH', 'DAP Dräxlmaier Automotivprodukte GmbH', 3],
['DAP Dräxlmaier Automotivprodukte GmbH', 'DFT Dräxlmaier Fahrzeugtechnik GmbH', 3],
['DAT Dräxlmaier Automotivtechnik GmbH', 'DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 2],
['DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 'DAT Dräxlmaier Automotivtechnik GmbH', 2],
['DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 'DAI Dräxlmaier Automotive International GmbH', 2],
['DAI Dräxlmaier Automotive International GmbH', 'DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 2],
['DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 'DFT Dräxlmaier Fahrzeugtechnik GmbH', 3],
['DFT Dräxlmaier Fahrzeugtechnik GmbH', 'DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 3],
['DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 'DAP Dräxlmaier Automotivprodukte GmbH', 2],
['DAP Dräxlmaier Automotivprodukte GmbH', 'DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 2],
['DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 2],
['DST Dräxlmaier Systemtechnik GmbH', 'DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 2],
['DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 'DFS Dräxlmaier Fahrzeugsysteme GmbH', 4],
['DFS Dräxlmaier Fahrzeugsysteme GmbH', 'DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 4],
['DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 2],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 2],
['DAT Dräxlmaier Automotivtechnik GmbH', 'DAP Dräxlmaier Automotivprodukte GmbH', 3],
['DAP Dräxlmaier Automotivprodukte GmbH', 'DAT Dräxlmaier Automotivtechnik GmbH', 3],
['DAP Dräxlmaier Automotivprodukte GmbH', 'DAI Dräxlmaier Automotive International GmbH', 2],
['DAI Dräxlmaier Automotive International GmbH', 'DAP Dräxlmaier Automotivprodukte GmbH', 2],
['DAP Dräxlmaier Automotivprodukte GmbH', 'DFT Dräxlmaier Fahrzeugtechnik GmbH', 3],
['DFT Dräxlmaier Fahrzeugtechnik GmbH', 'DAP Dräxlmaier Automotivprodukte GmbH', 3],
['DAP Dräxlmaier Automotivprodukte GmbH', 'DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 2],
['DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 'DAP Dräxlmaier Automotivprodukte GmbH', 2],
['DAP Dräxlmaier Automotivprodukte GmbH', 'DFS Dräxlmaier Fahrzeugsysteme GmbH', 2],
['DFS Dräxlmaier Fahrzeugsysteme GmbH', 'DAP Dräxlmaier Automotivprodukte GmbH', 2],
['DAP Dräxlmaier Automotivprodukte GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 2],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DAP Dräxlmaier Automotivprodukte GmbH', 2],
['DAT Dräxlmaier Automotivtechnik GmbH', 'Lisa Dräxlmaier GmbH', 1],
['Lisa Dräxlmaier GmbH', 'DAT Dräxlmaier Automotivtechnik GmbH', 1],
['Lisa Dräxlmaier GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 5],
['DST Dräxlmaier Systemtechnik GmbH', 'Lisa Dräxlmaier GmbH', 5],
['Lisa Dräxlmaier GmbH', 'DFL Dräxlmaier Fahrzeuglogistik GmbH', 2],
['DFL Dräxlmaier Fahrzeuglogistik GmbH', 'Lisa Dräxlmaier GmbH', 2],
['Lisa Dräxlmaier GmbH', 'Delta Management GmbH', 2],
['Delta Management GmbH', 'Lisa Dräxlmaier GmbH', 2],
['Lisa Dräxlmaier GmbH', 'Fritz Dräxlmaier GmbH & Co. KG', 2],
['Fritz Dräxlmaier GmbH & Co. KG', 'Lisa Dräxlmaier GmbH', 2],
['Lisa Dräxlmaier GmbH', 'Fritz Dräxlmaier Beteiligungsgesellschaft mbH', 3],
['Fritz Dräxlmaier Beteiligungsgesellschaft mbH', 'Lisa Dräxlmaier GmbH', 3],
['Lisa Dräxlmaier GmbH', 'Delta Versorgungsmanagement GmbH', 2],
['Delta Versorgungsmanagement GmbH', 'Lisa Dräxlmaier GmbH', 2],
['Lisa Dräxlmaier GmbH', 'Eldra Kunststofftechnik GmbH', 4],
['Eldra Kunststofftechnik GmbH', 'Lisa Dräxlmaier GmbH', 4],
['Lisa Dräxlmaier GmbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 4],
['DIS Dräxlmaier Industrial Solutions GmbH', 'Lisa Dräxlmaier GmbH', 4],
['DAT Dräxlmaier Automotivtechnik GmbH', 'Eldra Kunststofftechnik GmbH', 3],
['Eldra Kunststofftechnik GmbH', 'DAT Dräxlmaier Automotivtechnik GmbH', 3],
['Eldra Kunststofftechnik GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 5],
['DST Dräxlmaier Systemtechnik GmbH', 'Eldra Kunststofftechnik GmbH', 5],
['Eldra Kunststofftechnik GmbH', 'DKS Dräxlmaier Kunststoffsysteme GmbH', 8],
['DKS Dräxlmaier Kunststoffsysteme GmbH', 'Eldra Kunststofftechnik GmbH', 8],
['Eldra Kunststofftechnik GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 4],
['DAS Dräxlmaier Automotivsysteme GmbH', 'Eldra Kunststofftechnik GmbH', 4],
['Eldra Kunststofftechnik GmbH', 'DBL Dräxlmaier Bordnetzlogistik GmbH', 2],
['DBL Dräxlmaier Bordnetzlogistik GmbH', 'Eldra Kunststofftechnik GmbH', 2],
['Eldra Kunststofftechnik GmbH', 'DAI Dräxlmaier Automotive International GmbH', 2],
['DAI Dräxlmaier Automotive International GmbH', 'Eldra Kunststofftechnik GmbH', 2],
['Eldra Kunststofftechnik GmbH', 'Lisa Dräxlmaier GmbH', 4],
['Lisa Dräxlmaier GmbH', 'Eldra Kunststofftechnik GmbH', 4],
['Eldra Kunststofftechnik GmbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 7],
['DIS Dräxlmaier Industrial Solutions GmbH', 'Eldra Kunststofftechnik GmbH', 7],
['DAT Dräxlmaier Automotivtechnik GmbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 2],
['DIS Dräxlmaier Industrial Solutions GmbH', 'DAT Dräxlmaier Automotivtechnik GmbH', 2],
['DIS Dräxlmaier Industrial Solutions GmbH', 'Lisa Dräxlmaier GmbH', 4],
['Lisa Dräxlmaier GmbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 4],
['DIS Dräxlmaier Industrial Solutions GmbH', 'Eldra Kunststofftechnik GmbH', 7],
['Eldra Kunststofftechnik GmbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 7],
['DIS Dräxlmaier Industrial Solutions GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 6],
['DST Dräxlmaier Systemtechnik GmbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 6],
['DIS Dräxlmaier Industrial Solutions GmbH', 'DKS Dräxlmaier Kunststoffsysteme GmbH', 5],
['DKS Dräxlmaier Kunststoffsysteme GmbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 5],
['DIS Dräxlmaier Industrial Solutions GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 2],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 2],
['DIS Dräxlmaier Industrial Solutions GmbH', 'DAG Dräxlmaier Aviation GmbH', 2],
['DAG Dräxlmaier Aviation GmbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 2],
['DIS Dräxlmaier Industrial Solutions GmbH', 'Qestronic Electronic Solutions GmbH', 2],
['Qestronic Electronic Solutions GmbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 2],
['DIS Dräxlmaier Industrial Solutions GmbH', 'Fritz Dräxlmaier Beteiligungsgesellschaft mbH', 2],
['Fritz Dräxlmaier Beteiligungsgesellschaft mbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 2],
['DIS Dräxlmaier Industrial Solutions GmbH', 'DAI Dräxlmaier Automotive International GmbH', 3],
['DAI Dräxlmaier Automotive International GmbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 3],
['DAT Dräxlmaier Automotivtechnik GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 2],
['DST Dräxlmaier Systemtechnik GmbH', 'DAT Dräxlmaier Automotivtechnik GmbH', 2],
['DST Dräxlmaier Systemtechnik GmbH', 'Lisa Dräxlmaier GmbH', 5],
['Lisa Dräxlmaier GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 5],
['DST Dräxlmaier Systemtechnik GmbH', 'Eldra Kunststofftechnik GmbH', 5],
['Eldra Kunststofftechnik GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 5],
['DST Dräxlmaier Systemtechnik GmbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 6],
['DIS Dräxlmaier Industrial Solutions GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 6],
['DST Dräxlmaier Systemtechnik GmbH', 'DKS Dräxlmaier Kunststoffsysteme GmbH', 3],
['DKS Dräxlmaier Kunststoffsysteme GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 3],
['DST Dräxlmaier Systemtechnik GmbH', 'DFL Dräxlmaier Fahrzeuglogistik GmbH', 2],
['DFL Dräxlmaier Fahrzeuglogistik GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 2],
['DST Dräxlmaier Systemtechnik GmbH', 'DFS Dräxlmaier Fahrzeugsysteme GmbH', 2],
['DFS Dräxlmaier Fahrzeugsysteme GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 2],
['DST Dräxlmaier Systemtechnik GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 3],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 3],
['DST Dräxlmaier Systemtechnik GmbH', 'Qestronic Electronic Solutions GmbH', 3],
['Qestronic Electronic Solutions GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 3],
['DST Dräxlmaier Systemtechnik GmbH', 'Fritz Dräxlmaier Beteiligungsgesellschaft mbH', 2],
['Fritz Dräxlmaier Beteiligungsgesellschaft mbH', 'DST Dräxlmaier Systemtechnik GmbH', 2],
['DST Dräxlmaier Systemtechnik GmbH', 'DAI Dräxlmaier Automotive International GmbH', 3],
['DAI Dräxlmaier Automotive International GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 3],
['DST Dräxlmaier Systemtechnik GmbH', 'DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 2],
['DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 2],
['DAT Dräxlmaier Automotivtechnik GmbH', 'DKS Dräxlmaier Kunststoffsysteme GmbH', 2],
['DKS Dräxlmaier Kunststoffsysteme GmbH', 'DAT Dräxlmaier Automotivtechnik GmbH', 2],
['DKS Dräxlmaier Kunststoffsysteme GmbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 5],
['DIS Dräxlmaier Industrial Solutions GmbH', 'DKS Dräxlmaier Kunststoffsysteme GmbH', 5],
['DKS Dräxlmaier Kunststoffsysteme GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 3],
['DST Dräxlmaier Systemtechnik GmbH', 'DKS Dräxlmaier Kunststoffsysteme GmbH', 3],
['DKS Dräxlmaier Kunststoffsysteme GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 3],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DKS Dräxlmaier Kunststoffsysteme GmbH', 3],
['DKS Dräxlmaier Kunststoffsysteme GmbH', 'Qestronic Electronic Solutions GmbH', 2],
['Qestronic Electronic Solutions GmbH', 'DKS Dräxlmaier Kunststoffsysteme GmbH', 2],
['DKS Dräxlmaier Kunststoffsysteme GmbH', 'DAI Dräxlmaier Automotive International GmbH', 2],
['DAI Dräxlmaier Automotive International GmbH', 'DKS Dräxlmaier Kunststoffsysteme GmbH', 2],
['DKS Dräxlmaier Kunststoffsysteme GmbH', 'Eldra Kunststofftechnik GmbH', 8],
['Eldra Kunststofftechnik GmbH', 'DKS Dräxlmaier Kunststoffsysteme GmbH', 8],
['DAT Dräxlmaier Automotivtechnik GmbH', 'DFS Dräxlmaier Fahrzeugsysteme GmbH', 2],
['DFS Dräxlmaier Fahrzeugsysteme GmbH', 'DAT Dräxlmaier Automotivtechnik GmbH', 2],
['DFS Dräxlmaier Fahrzeugsysteme GmbH', 'DFT Dräxlmaier Fahrzeugtechnik GmbH', 4],
['DFT Dräxlmaier Fahrzeugtechnik GmbH', 'DFS Dräxlmaier Fahrzeugsysteme GmbH', 4],
['DFS Dräxlmaier Fahrzeugsysteme GmbH', 'DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 4],
['DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 'DFS Dräxlmaier Fahrzeugsysteme GmbH', 4],
['DFS Dräxlmaier Fahrzeugsysteme GmbH', 'DAP Dräxlmaier Automotivprodukte GmbH', 2],
['DAP Dräxlmaier Automotivprodukte GmbH', 'DFS Dräxlmaier Fahrzeugsysteme GmbH', 2],
['DFS Dräxlmaier Fahrzeugsysteme GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 2],
['DST Dräxlmaier Systemtechnik GmbH', 'DFS Dräxlmaier Fahrzeugsysteme GmbH', 2],
['DFS Dräxlmaier Fahrzeugsysteme GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 2],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DFS Dräxlmaier Fahrzeugsysteme GmbH', 2],
['DFS Dräxlmaier Fahrzeugsysteme GmbH', 'Fritz Dräxlmaier Beteiligungsgesellschaft mbH', 2],
['Fritz Dräxlmaier Beteiligungsgesellschaft mbH', 'DFS Dräxlmaier Fahrzeugsysteme GmbH', 2],
['DFS Dräxlmaier Fahrzeugsysteme GmbH', 'DAI Dräxlmaier Automotive International GmbH', 2],
['DAI Dräxlmaier Automotive International GmbH', 'DFS Dräxlmaier Fahrzeugsysteme GmbH', 2],
['DAT Dräxlmaier Automotivtechnik GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 2],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DAT Dräxlmaier Automotivtechnik GmbH', 2],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DAP Dräxlmaier Automotivprodukte GmbH', 2],
['DAP Dräxlmaier Automotivprodukte GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 2],
['DAS Dräxlmaier Automotivsysteme GmbH', 'Eldra Kunststofftechnik GmbH', 4],
['Eldra Kunststofftechnik GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 4],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 2],
['DIS Dräxlmaier Industrial Solutions GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 2],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DST Dräxlmaier Systemtechnik GmbH', 3],
['DST Dräxlmaier Systemtechnik GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 3],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DKS Dräxlmaier Kunststoffsysteme GmbH', 3],
['DKS Dräxlmaier Kunststoffsysteme GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 3],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DFS Dräxlmaier Fahrzeugsysteme GmbH', 2],
['DFS Dräxlmaier Fahrzeugsysteme GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 2],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DBL Dräxlmaier Bordnetzlogistik GmbH', 2],
['DBL Dräxlmaier Bordnetzlogistik GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 2],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DAI Dräxlmaier Automotive International GmbH', 4],
['DAI Dräxlmaier Automotive International GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 4],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DFT Dräxlmaier Fahrzeugtechnik GmbH', 2],
['DFT Dräxlmaier Fahrzeugtechnik GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 2],
['DAS Dräxlmaier Automotivsysteme GmbH', 'DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 2],
['DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH', 'DAS Dräxlmaier Automotivsysteme GmbH', 2],
['DAT Dräxlmaier Automotivtechnik GmbH', '3P-Entwicklung GmbH', 1],
['3P-Entwicklung GmbH', 'DAT Dräxlmaier Automotivtechnik GmbH', 1],
['DAT Dräxlmaier Automotivtechnik GmbH', 'DAG Dräxlmaier Aviation GmbH', 1],
['DAG Dräxlmaier Aviation GmbH', 'DAT Dräxlmaier Automotivtechnik GmbH', 1],
['DAG Dräxlmaier Aviation GmbH', 'DIS Dräxlmaier Industrial Solutions GmbH', 2],
['DIS Dräxlmaier Industrial Solutions GmbH', 'DAG Dräxlmaier Aviation GmbH', 2],
];

var colors = {
"DAT Dräxlmaier Automotivtechnik GmbH": "#da4480",
"3P-Entwicklung GmbH": "#5ab449",
"DAG Dräxlmaier Aviation GmbH": "#7f5acd",
"DAI Dräxlmaier Automotive International GmbH": "#aab740",
"DAP Dräxlmaier Automotivprodukte GmbH": "#ce58c0",
"DAS Dräxlmaier Automotivsysteme GmbH": "#50a26e",
"DBL Dräxlmaier Bordnetzlogistik GmbH": "#d1434b",
"DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH": "#45c0bc",
"DFL Dräxlmaier Fahrzeuglogistik GmbH": "#ce5929",
"DFS Dräxlmaier Fahrzeugsysteme GmbH": "#4e7bda",
"DFT Dräxlmaier Fahrzeugtechnik GmbH": "#d49d3c",
"DIS Dräxlmaier Industrial Solutions GmbH": "#6660a3",
"DKS Dräxlmaier Kunststoffsysteme GmbH": "#7b853c",
"DST Dräxlmaier Systemtechnik GmbH": "#b58dde",
"Delta Management GmbH": "#97622e",
"Delta Versorgungsmanagement GmbH": "#609dd6",
"Eldra Kunststofftechnik GmbH": "#e29074",
"Fritz Dräxlmaier Beteiligungsgesellschaft mbH": "#9c4b88",
"Fritz Dräxlmaier GmbH & Co. KG": "#ab505f",
"Lisa Dräxlmaier GmbH": "#dc85b6",
"Qestronic Electronic Solutions GmbH": "#5ab449",
};

var sortOrder = [
"DAT Dräxlmaier Automotivtechnik GmbH",
"3P-Entwicklung GmbH",
"DAG Dräxlmaier Aviation GmbH",
"DAI Dräxlmaier Automotive International GmbH",
"DAP Dräxlmaier Automotivprodukte GmbH",
"DAS Dräxlmaier Automotivsysteme GmbH",
"DBL Dräxlmaier Bordnetzlogistik GmbH",
"DEE Dräxlmaier Elektrik- und Elektroniksysteme GmbH",
"DFL Dräxlmaier Fahrzeuglogistik GmbH",
"DFS Dräxlmaier Fahrzeugsysteme GmbH",
"DFT Dräxlmaier Fahrzeugtechnik GmbH",
"DIS Dräxlmaier Industrial Solutions GmbH",
"DKS Dräxlmaier Kunststoffsysteme GmbH",
"DST Dräxlmaier Systemtechnik GmbH",
"Delta Management GmbH",
"Delta Versorgungsmanagement GmbH",
"Eldra Kunststofftechnik GmbH",
"Fritz Dräxlmaier Beteiligungsgesellschaft mbH",
"Fritz Dräxlmaier GmbH & Co. KG",
"Lisa Dräxlmaier GmbH",
"Qestronic Electronic Solutions GmbH",
];

function sort(a,b){ return d3.ascending(sortOrder.indexOf(a),sortOrder.indexOf(b)); }

var ch = viz.ch().data(data)
      .padding(.01)
      .sort(sort)
	  .innerRadius(330)
	  .outerRadius(350)
	  .duration(1000)
	  .chordOpacity(0.3)
	  .labelPadding(.03)
      .fill(function(d){ return colors[d];});

var width=1200, height=1100;

var svg = d3.select(".circleGraph").append("svg").attr("height",height).attr("width",width);

svg.append("g").attr("transform", "translate(600,550)").call(ch);

// adjust height of frame in bl.ocks.org
d3.select(self.frameElement).style("height", height+"px").style("width", width+"px");  