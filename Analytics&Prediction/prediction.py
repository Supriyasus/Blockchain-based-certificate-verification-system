# %% Import Libraries
import pandas as pd
import numpy as np
import plotly.express as px
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_percentage_error
from sklearn.model_selection import train_test_split

# %% Simulate Daily Data
date_range = pd.date_range(start='2024-01-01', end='2024-08-31')
np.random.seed(42)
certificates_issued = np.random.poisson(lam=50, size=len(date_range))

for i in range(1, len(certificates_issued)):
    fluctuation = np.random.normal(loc=0, scale=10)
    if np.random.rand() > 0.95:
        fluctuation += np.random.randint(30, 60)
    elif np.random.rand() < 0.05:
        fluctuation -= np.random.randint(20, 40)
    certificates_issued[i] = max(0, certificates_issued[i-1] + fluctuation)

df_certificates = pd.DataFrame({
    'Date': date_range,
    'Certificates_Issued': certificates_issued
})

# Show the size of the data
print(f"Size of the data: {df_certificates.shape}")

# %% Line Plot
fig_line = px.line(df_certificates, x='Date', y='Certificates_Issued',
                   title='Simulated Certificates Issued per Day (2024)',
                   labels={'Date': 'Date', 'Certificates_Issued': 'Certificates Issued'})
fig_line.show()

# Bar Plot
fig_bar = px.bar(df_certificates, x='Date', y='Certificates_Issued',
                 title='Daily Certificates Issued (2024)',
                 labels={'Date': 'Date', 'Certificates_Issued': 'Certificates Issued'})
fig_bar.show()

# %% Aggregate Data by Month
df_certificates['Date'] = pd.to_datetime(df_certificates['Date'])
df_certificates.set_index('Date', inplace=True)
monthly_data = df_certificates.resample('M').sum().reset_index()

# Show the aggregated monthly data
print(monthly_data)

# %% Plot Monthly Bar Chart
fig_monthly = px.bar(monthly_data, x='Date', y='Certificates_Issued',
                    title='Monthly Certificates Issued (2024)',
                    labels={'Date': 'Month', 'Certificates_Issued': 'Certificates Issued'},
                    text='Certificates_Issued')

fig_monthly.update_traces(texttemplate='%{text:.0f}', textposition='outside')
fig_monthly.show()

# %% Prepare Data for Linear Regression
df_certificates['Previous_Month_Issued'] = df_certificates['Certificates_Issued'].shift(30)
df_certificates.fillna(method='bfill', inplace=True)

X = df_certificates[['Previous_Month_Issued']]
y = df_certificates['Certificates_Issued']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, shuffle=False)

# %% Train Linear Regression Model
linear_model = LinearRegression()
linear_model.fit(X_train, y_train)

# Make predictions
y_pred_linear = linear_model.predict(X_test)

# Calculate mean absolute percentage error (MAPE)
mape_linear = mean_absolute_percentage_error(y_test, y_pred_linear)
print(f'Mean Absolute Percentage Error for Linear Regression: {mape_linear}')

# %% Print Predicted Data Along with Previous Data
# Create a DataFrame with actual and predicted values
predicted_vs_actual = pd.DataFrame({
    'Date': df_certificates.index[-len(y_test):],  # Use the last dates corresponding to the test set
    'Actual_Certificates_Issued': y_test.values,
    'Predicted_Certificates_Issued': y_pred_linear
})

# Calculate residuals (difference between actual and predicted)
predicted_vs_actual['Residuals'] = predicted_vs_actual['Actual_Certificates_Issued'] - predicted_vs_actual['Predicted_Certificates_Issued']

# Print the actual vs predicted data
print(predicted_vs_actual)

# Optionally, display a plot for better visualization
fig_comparison = px.line(predicted_vs_actual, x='Date', 
                         y=['Actual_Certificates_Issued', 'Predicted_Certificates_Issued'],
                         labels={'value': 'Certificates Issued', 'Date': 'Date', 'variable': 'Series'},
                         title='Actual vs Predicted Certificates Issued (Linear Regression)')

# Enhance layout to better show variations
fig_comparison.update_layout(yaxis_title="Certificates Issued", xaxis_title="Date",
                             yaxis=dict(tickformat=".0f", showgrid=True))

fig_comparison.show()

# Optionally, plot residuals to better observe the variation
fig_residuals = px.bar(predicted_vs_actual, x='Date', y='Residuals',
                       title='Residuals (Difference between Actual and Predicted Values)')
fig_residuals.show()

# %%
